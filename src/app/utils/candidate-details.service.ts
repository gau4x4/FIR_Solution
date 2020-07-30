import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../utils/Candidate-Interface';

let candidate: Candidate[] = [
  {
    id: 'ASHJ1235',
    name: 'Gaurav Pathak',
    gender: 'Male',
    location: 'Delhi',
    status: 'interview',
    skills: ['C#', 'ASP.Net MVC', 'AngularJS', 'JAVA', 'C', 'CPP'],
    actions: ['select', 'reject'],
  },
  {
    id: '2ASHJ1235',
    name: 'Marla Steven',
    gender: 'Male',
    location: 'Delhi',
    status: 'interview',
    skills: ['C#', 'ASP.Net MVC', 'AngularJS', 'JAVA', 'C', 'CPP'],
    actions: ['select', 'reject'],
  },
  {
    id: '3ASHJ1235',
    name: 'Maine Doe',
    gender: 'Male',
    location: 'Delhi',
    status: 'interview',
    skills: ['C#', 'ASP.Net MVC', 'AngularJS', 'JAVA', 'C', 'CPP'],
    actions: ['select', 'reject'],
  },
  {
    id: '4ASHJ1235',
    name: 'John Doe',
    gender: 'Male',
    location: 'Delhi',
    status: 'interview',
    skills: ['C#', 'ASP.Net MVC', 'AngularJS', 'JAVA', 'C', 'CPP'],
    actions: ['select', 'reject'],
  },
];

@Injectable({
  providedIn: 'root',
})
export class CandidateDetailService {
  constructor(private httpclient: HttpClient) {}

  getCandidateDetails() {
    return candidate;
  }
  dispatchSelectCandidate(id: string) {
    let selectedCandidate: Candidate = candidate.find((item) => {
      return item.id == id;
    });
    selectedCandidate.status = 'selected';
    return candidate;
  }
  dispatchRejectCandidate(id: string) {
    let selectedCandidate: Candidate = candidate.find((item) => {
      return item.id == id;
    });
    selectedCandidate.status = 'rejected';
    return candidate;
  }
  getTotalCandidate() {
    return candidate.length;
  }
  getNoSelectedCandidate() {
    let selectedCandidate: Candidate[] = candidate.filter(
      (item) => item.status == 'selected'
    );
    return selectedCandidate.length;
  }
  getNoRejectedCandidate() {
    let rejectedCandidate: Candidate[] = candidate.filter(
      (item) => item.status == 'rejected'
    );
    return rejectedCandidate.length;
  }
  addCandidate(candi: Candidate) {
    candidate.push(candi);
    return candidate;
  }
}
