import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  params;
  details;
  constructor(private apiService: ApiService) { }

  /**
   * subscribe the data from the server to the variable params
   */
  ngOnInit() {
    this.apiService.getParams()
    .subscribe((data) => {
      console.log(data);
      this.params = (data);
    });
  }

  /**
   * subscribe the data (param_details) to the variable details
   * @param id passes the parameter which ID has been clicked on
   */
  paramDetail(id) {
    this.apiService.getDetails(id)
    .subscribe((response) => {
      console.log(response);
      this.details = (response);
    });
  }
}
