import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MasterDataItem {
    
  sprint: string;
  team: string;
  plannedSP: number;
  deliveredSP: number;
  overridePlannedSP: number;
  overrideDeliveredSP: number;
  jiraPlannedSP: number;
  jiraDeliveredSP: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MasterDataItem[] = [
  {
    sprint: 'Sprint 1', 
    team: 'Team A', 
    plannedSP: 3 ,
    deliveredSP: 3, 
    overridePlannedSP: 3 , 
    overrideDeliveredSP: 3,
    jiraDeliveredSP: 3, 
    jiraPlannedSP: 3
  },
  {
    sprint: 'Sprint 2', 
    team: 'Team A', 
    plannedSP: 4 ,
    deliveredSP: 4, 
    overridePlannedSP: 4 , 
    overrideDeliveredSP: 4,
    jiraDeliveredSP: 4, 
    jiraPlannedSP: 4
  },
  {
    sprint: 'Sprint 2', 
    team: 'Team B', 
    plannedSP: 5 ,
    deliveredSP: 5, 
    overridePlannedSP: 5 , 
    overrideDeliveredSP: 5,
    jiraDeliveredSP: 5, 
    jiraPlannedSP: 5
  },
  {
    sprint: 'Sprint 1', 
    team: 'Team B', 
    plannedSP: 8 ,
    deliveredSP: 8, 
    overridePlannedSP: 8 , 
    overrideDeliveredSP: 8,
    jiraDeliveredSP: 8, 
    jiraPlannedSP: 8
  },
];

/**
 * Data source for the AgileDatatable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AgileDatatableDataSource extends DataSource<MasterDataItem> {
  data: MasterDataItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MasterDataItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MasterDataItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MasterDataItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'sprint': return compare(a.sprint, b.sprint, isAsc);
        case 'team': return compare(+a.team, +b.team, isAsc);
        case 'plannedSP': return compare(+a.plannedSP, +b.plannedSP, isAsc);
        case 'overridePlannedSP': return compare(+a.overridePlannedSP, +b.overridePlannedSP, isAsc);
        case 'deliveredSP': return compare(+a.deliveredSP, +b.deliveredSP, isAsc);
        case 'overrideDeliveredSP': return compare(+a.overrideDeliveredSP, +b.overrideDeliveredSP, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
