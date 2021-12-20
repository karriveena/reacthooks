import classes from  './User.module.css';


function User(props){
const name="hello everyone";
  return (
      <div className={classes.centered}><p> username</p>
          <button onClick={()=>props.useralert(name)}>click</button>
      </div>
  )

}export default User;