export interface UserData {
    id: string;
    name: string;
    email: string;
    reportingManager:string;
    Designation:string;
    Location:string;
  }
  export interface certificateData {
    date: string;
    name: string;
    Experience: string;
  }
  
  export const EXAMPLE_DATA: UserData[] = [
    { id: 'AI01', name: 'John Doe', email: 'john.doe@gmail.com', reportingManager: 'Abc', Designation: 'software engineer', Location:'mumbai'},
    { id: 'AI02', name: 'Jane Smith', email: 'jane.smith@gmail.com', reportingManager: 'Abc', Designation: 'software engineer', Location:'mumbai' },
    { id: 'AI03', name: 'Bob Johnson', email: 'bob.johnson@gmail.com', reportingManager: 'Abc', Designation: 'software engineer', Location:'mumbai' },
    { id: 'AI04', name: 'Teddy Altman', email: 'teddy.altman@gmail.com', reportingManager: 'Abc', Designation: 'software engineer', Location:'mumbai' },
    { id: 'AI05', name: 'Christina Yang', email: 'chirstina.yang@gmail.com', reportingManager: 'Abc', Designation: 'software engineer', Location:'mumbai' },
    { id: 'AI06', name: 'Meredith Grey', email: 'meredith Grey@gmail.com' , reportingManager: 'Abc', Designation: 'software engineer', Location:'mumbai'},
    { id: 'AI07', name: 'Mark Sloan', email: 'mark.sloan@gmail.com', reportingManager: 'Abc', Designation: 'software engineer', Location:'mumbai' },
    { id: 'AI08', name: 'Jade Smith', email: 'jade.smith@gmail.com', reportingManager: 'Abc', Designation: 'software engineer', Location:'mumbai' },
    { id: 'AI09', name: 'Bob Son', email: 'bob.son@gmail.com', reportingManager: 'Abc', Designation: 'software engineer', Location:'mumbai' },
  ];

  export const CERTIFICATE_DATA: certificateData[] =[
    { date:'22-10-2021', name:'Aws Cloud', Experience:'01'},
    { date:'26-11-2022', name:'Java', Experience:'04'},
    { date:'06-07-2023', name:'Angular', Experience:'02'},
    { date:'05-06-2022', name:'React', Experience:'01'},
    { date:'04-12-2021', name:'Python', Experience:'03'}
  ];