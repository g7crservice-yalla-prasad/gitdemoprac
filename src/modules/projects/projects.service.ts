import { Injectable } from '@nestjs/common';

const projects = [
    {
        "id":1,
        "name":"devops"
    },
    {
        "id":2,
        "name":"web development"
    },
    {
        "id":3,
        "name":"cloud"
    }
]

@Injectable()
export class ProjectsService {
    constructor(){}

    getProjects(){
        return({projects})
    }
}
