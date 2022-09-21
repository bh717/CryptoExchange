export default interface IUser {
  id?: any | null,
  firstname: string,
  lastname: string,
  invitecode:string,
  email: string,
  password: string,
  confirm:string,
  roles?: Array<string>
}