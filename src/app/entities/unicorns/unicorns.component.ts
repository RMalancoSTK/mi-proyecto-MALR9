import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Unicorns } from './interfaces/unicorns';
import { UnicornsUpdateComponent } from './unicorns-update.component';
import { UnicornsViewComponent } from './unicorns-view.component';
import { UnicornsService } from './unicorns.service';

@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',
  styleUrls: ['./unicorns.component.css']
})
export class UnicornsComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'age', 'colour', 'actions'];
  my_data: Unicorns[] = [];
  dataSource = new MatTableDataSource<Unicorns>(this.my_data);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private unicornsService: UnicornsService
  ) {
    this.unicornsService.unicornsSubject.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.unicornsService.getUnicorns().subscribe((data) => {
      this.dataSource.data = data.body;
    });
  }

  openDialogViewUnicorn(unicorns: Unicorns) {
    const dialogRef = this.dialog.open(UnicornsViewComponent, {
      width: '500px',
      data: unicorns,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.unicornsService.getUnicorns().subscribe((data) => {});
    });
  }

  openDialogEditUnicorn(unicorns: Unicorns) {
    const dialogRef = this.dialog.open(UnicornsUpdateComponent, {
      data: unicorns,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.unicornsService.getUnicorns().subscribe((data) => {});
    });
  }

  openDialogCreateUnicorn() {
    const dialogRef = this.dialog.open(UnicornsUpdateComponent, {
      data: null,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.unicornsService.getUnicorns().subscribe((data) => {});
    });
  }

  deleteUnicorn(_id: string) {
    this.unicornsService.deleteUnicorn(_id).subscribe((data) => {
      this.unicornsService.getUnicorns().subscribe((data) => {});
    });
  }
}
