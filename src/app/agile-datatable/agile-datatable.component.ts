import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AgileDatatableDataSource } from './agile-datatable-datasource';

@Component({
  selector: 'app-agile-datatable',
  templateUrl: './agile-datatable.component.html',
  styleUrls: ['./agile-datatable.component.css']
})
export class AgileDatatableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AgileDatatableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['sprint', 'team', 'plannedSP', 'overridePlannedSP','deliveredSP', 'overrideDeliveredSP', ];

  ngOnInit() {
    this.dataSource = new AgileDatatableDataSource(this.paginator, this.sort);
  }
}
