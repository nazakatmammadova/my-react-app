const Navbar= () => {
    return ( 
        <nav className="navbar">
            <h1>AOS Blog</h1>
            <div className="links">
                <a href="/">Ana sehife</a>
                <a href="/create" style={{
                    color:'white',
                    backgroundColor:'#ff793f',
                    borderRadius:'0.2rem'
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;