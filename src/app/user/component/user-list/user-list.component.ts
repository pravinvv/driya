import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  mockData: any = [
    {
      id: "1",
      title: "Honda",
      done: false,
      date: new Date()
    },
    {
      id: "2",
      title: "Bajaj",
      done: false,
      date: new Date()
    },
    {
      id: "3",
      title: "TVS",
      done: false,
      date: new Date()
    },
    {
      id: "4",
      title: "Royal",
      done: false,
      date: new Date()
    }
  ];

  show: boolean = false;
  value: string;
  id: number;
  item;
  constructor() {}
  remove(id) {
    this.mockData = this.mockData.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
    alert("Item is Deleted Successfully...!!!");
  }

  create() {
    if (this.item == "") {
      alert("Please Add valid input.....!!!");
    } else {
      this.mockData.push({
        id: this.mockData.length + 1,
        title: this.item,
        done: false,
        date: new Date()
      });
      this.item = "";
    }
  }

  update(title) {
    this.mockData.map(item => {
      if (item.id === this.id) {
        item["title"] = title;
      }
    });

    this.show = false;
  }

  edit(id, title) {
    this.show = true;
    this.value = title;
    this.id = id;
  }

  ngOnInit() {}
}
