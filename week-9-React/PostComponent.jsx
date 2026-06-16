function App() {

  return (
    <div style = {{background: "#dfe6e9", height: "100vh"}}>
      <div style = {{display: "flex", justifyContent: "center"}}>
          <PostComponent />
      </div>
    </div>
  )
}
const style = {width: 200, backgroundColor: "White", borderRadius: 10, borderColor: "black", borderWidth: 1, margin: 20, padding: 20 }

function PostComponent(){
  return <div style = {style}>
  <div style = {{display: "flex"}}>
    <img src={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwSXXMec-eXmgeWgVvEmx9wmdHHgxC8E1YQ61wb9ucVdrHo4xK"}
    style = {{
      width: 60, 
      height: 60, 
      borderRadius: 50}} />
    
      <div style={{ fontSize: 10, marginLeft: 10}}>
        <div><b> Avanti Konde </b></div>
        <div> X account</div>
      </div>
  </div>
      <div style={{fontSize: 12, marginTop: 10, lineHeight: "1.2"}}
>
        Though no one can go back and make a brand new start,
        anyone can start from now and make a brand new ending.
      </div>
  
</div>
}

export default App
