const Application = () => {
  return (
    <>
        <h1>Form</h1>
        <h2>Section </h2>
        <p>All are mandatory</p>
        <div>Hello world</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" data-testid="nameid" placeholder="fullname" value="Amit" onChange={()=>{}}/>
        </div>
        <div>
          <label htmlFor="desc">Desc</label>
          <input type="textarea" id="desc" />
        </div>
        <div>
          <label htmlFor="location">
            <select name="" id="location">
              <option value="">Select</option>
              <option value="India">Indian</option>
              <option value="US">US</option>
              <option value="Canada">Canada</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="terms">
            <input type="checkbox" name="" id="terms" /> Agree
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Application;
