
const Navbar = (props)=>{
   return (<div style={styles.navbarouterdiv}><img style={styles.navbarimg} alt="cartimg" src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png"></img>
   <span>{props.count}</span></div>);
};

const styles={
    navbarouterdiv:{
        height: 50,
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        backgroundColor:"yellow"
    },
    navbarimg:{
        height:40,
        width:50
    }
}

export default Navbar;