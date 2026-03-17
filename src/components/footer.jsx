export function Footer(){
    const currentYear = new Date().getFullYear();
    return <p style={{color:"#ccc"}}>
        Prashant Verma &copy; {currentYear}
    </p>
}