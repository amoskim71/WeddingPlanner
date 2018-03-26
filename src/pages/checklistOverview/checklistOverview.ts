import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-checklistOverview',
  templateUrl: 'checklistOverview.html'
})
export class ChecklistOverviewPage {

  tasks: any = [];

  constructor(public navCtrl: NavController, private sqlite: SQLite, public storage: Storage) {
    //this.getData();
    this.loadTaskStorage();
    this.addTaskStorage();
  }

  updateCheckbox() {
    this.storage.set('name', 'Max');
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
    });
  }

  addTaskStorage(){
    var key = 'get food';
    var value = '0';
    this.storage.set(key,value);
    this.tasks.push({key:key,value:value});
    console.log('add task get Food');
  }

  loadTaskStorage(){
    this.tasks = [];
    this.storage.forEach( (value, key, index) => {
      //console.log("This is the value", value)
      //console.log("from the key", key)
      //console.log("Index is" index)
      this.tasks.push({key:key, value:value})
    })

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
