import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-institute-attestation-detail',
  templateUrl: './institute-attestation-detail.component.html',
  styleUrls: ['./institute-attestation-detail.component.css']
})
export class InstituteAttestationDetailComponent implements OnInit {
  user;
  education;
  educationDetail;
  id;
  constructor(private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.id = params['id']
    });
    this.user = JSON.parse(localStorage.getItem('user'));
    this.educationDetail = JSON.parse(localStorage.getItem('education'))[this.id];
    this.education = JSON.parse(localStorage.getItem('education'));
  }

  onAttestApprove(){
    this.educationDetail.attested = true;
    this.education[this.id] = this.educationDetail;
    localStorage.setItem('education', JSON.stringify(this.education))
    this.router.navigate(['institute-attestation']);
  }

}
