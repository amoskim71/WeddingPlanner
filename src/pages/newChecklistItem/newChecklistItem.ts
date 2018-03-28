import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';
import { ChecklistOverviewPage } from '../checklistOverview/checklistOverview';
  
@Component({
  selector: 'page-newChecklistItem',
  templateUrl: 'newChecklistItem.html'
})
export class NewChecklistItemPage {

  tasks: any = [];
  taskName: string = '';
  dueDate: Date = new Date();
  checklistOverviewPage: any;

  constructor(public navCtrl: NavController, private sqlite: SQLite, public storage: Storage) {
    //this.getData();
    this.checklistOverviewPage = ChecklistOverviewPage;
  }

  updateCheckbox() {
    this.storage.set('name', 'Max');
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
    });
  }

  addTaskStorage(){
    var key = this.taskName;
    var value = this.dueDate;
    this.storage.set(key,value);
    this.tasks.push({key:key,value:value});
    console.log('add test test 1');
  }


  getData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS tasklist (rowid INTEGER PRIMARY KEY, task VARCHAR(255), completed BIT)', {})
      .then(res => console.log('Executed create table SQL'))
      .catch(e => console.log(e));
      db.executeSql('SELECT * FROM tasklist ORDER BY rowid DESC', {})
      .then(res => {
        this.tasks = [];
        for(var i=0; i<res.rows.length; i++) {
          this.tasks.push({
            rowid:res.rows.item(i).rowid,
            task:res.rows.item(i).task,
            completed:res.rows.item(i).completed
          })
        }
      }).catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

  addTask() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO tasklist VALUES(NULL,"get Food", 0)',{})
        .then(res => console.log(res))
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }
}
