export default function SignUp() {
  return (
    <main>
      <form action="" className="form">
        <div className="input-filename">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="input-filename">
          <label htmlFor="username">Email</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="input-filename">
          <label htmlFor="password">Email</label>
          <input type="password" id="password" name="password" />
        </div>

        <div className="input-filename">
          <label htmlFor="firstname">Email</label>
          <input type="text" id="firstname" name="firstname" />
        </div>

        <div className="input-filename">
          <label htmlFor="lastname">Email</label>
          <input type="text" id="lastname" name="lastname" />
        </div>
        <div className="input-filename">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" />
        </div>

        <div className="input-filename">
          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="street" />
        </div>

        <div className="input-filename">
          <label htmlFor="number">Number</label>
          <input type="number" id="number" name="number" />
        </div>

        <div className="input-filename">
          <label htmlFor="zipcode">Zip code</label>
          <input type="number" id="zipcode" name="zipcode" />
        </div>

        <div className="input-filename">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" />
        </div>
      </form>
    </main>
  );
}
