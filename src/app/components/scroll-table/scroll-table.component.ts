import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-scroll-table',
  templateUrl: './scroll-table.component.html',
  styleUrls: ['./scroll-table.component.less']
})
export class ScrollTableComponent implements OnInit, AfterViewInit {
  data = [
    { a: '华为P30 Pro', b: '3344', c: '9989', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: 'iPhone XS Max', b: '4806', c: '11505', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: 'vivo X30 Pro 5G', b: '3103', c: '7447', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: 'Reno3 Pro 5G', b: '2847', c: '7686', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: 'Redmi K30', b: '2655', c: '7110', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: '一加 7T Pro 迈凯伦', b: '3678', c: '11224', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: '荣耀V30 Pro', b: '3908', c: '12345', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: '魅族 16T', b: '3540', c: '10590', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: '小米 CC 9 Pro', b: '2543', c: '6962', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: 'Reno Ace', b: '3545', c: '10320', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: 'iPhone 11', b: '5466', c: '13691', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: 'iPhone 11 Pro Max', b: '13903', c: '17845', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: '小米9', b: '3511', c: '11125', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: '华为Mate 20 Pro', b: '9895', c: '1152', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: 'Galaxy S9+(9810)', b: '3357', c: '5688', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: '一加6T', b: '3357', c: '9140', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: 'vivo NEX3 5G', b: '3357', c: '8994', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: 'vivo S5', b: '3357', c: '6002', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
    { a: 'iQOO Neo 855版', b: '3357', c: '111440', d: '2222', e: '3333', f: '4444', g: '5555', h: '6666', i: '7777', j: '8888', k: '9999', l: '10000', m: '11000', n: '12000', o: '13000' },
  ]
  @ViewChild('fixedRowWrapper', { static: true }) fixedRowWrapper: ElementRef<HTMLDivElement>;
  @ViewChild('tableContent', { static: true }) tableContent: ElementRef<HTMLDivElement>;
  @ViewChild('tableHeader', { static: true }) tableHeader: ElementRef<HTMLDivElement>;
  @ViewChild('listTable', { static: true }) listTable: ElementRef<HTMLTableElement>;
  @ViewChild('listTableHeader', { static: true }) listTableHeader: ElementRef<HTMLTableElement>;

  filterHeaderPanelStatus: boolean;// 头部过滤面板展开状态
  horizontalScrollDistance: number;// 水平滚动距离
  VerticalScrollDistance: number;// 垂直滚动距离
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    let width = $(this.listTable.nativeElement)[0].clientWidth;
    $(this.listTable.nativeElement).width(width)
    $(this.listTableHeader.nativeElement).width(width)

    $(this.tableContent.nativeElement).on('scroll', (e) => {
      $(this.fixedRowWrapper.nativeElement).prop('scrollTop', $(this.tableContent.nativeElement).prop('scrollTop'));
      // $(this.tableHeader.nativeElement).prop('scrollLeft', $(this.tableContent.nativeElement).prop('scrollLeft'))
      $(this.tableHeader.nativeElement).css({ marginLeft: `${-$(this.tableContent.nativeElement).prop('scrollLeft')}px` })
    })

    const tds = $(this.listTable.nativeElement.getElementsByTagName('tr')[0]).children('td');
    if (tds && tds.length > 0) {
      // tds.
    }
    console.log('tds', tds);

  }

  /**
   * 展开头部过滤面板
   */
  expandFilterHeader() {
    this.filterHeaderPanelStatus = !this.filterHeaderPanelStatus;
  }

  saveFilterHeaderConfig() {
    this.closeFilterHeaderConfig();
  }

  closeFilterHeaderConfig() {
    this.filterHeaderPanelStatus = false;
  }

}
