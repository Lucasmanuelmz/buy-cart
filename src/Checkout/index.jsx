import Button from "../Button";

export default function Checkout() {
    function handleAdvertise() {
        alert(`Please be aware that this website is not real and 
        does not represent a legitimate store.It is merely a learning 
        project developed as part of the TOP curriculum.Do not make
         purchases or provide personal information on this site, as it is 
         not functioning as a real store.Thank you for your understanding.`)
    }
    return (
        <main className="container">
            
            <form action="" className="checkout-data">
                <fieldset>
                    <legend>Personal data</legend>
                <label htmlFor="first-name">First name:
                    <input placeholder="First name" required type="text" name="first-name" id="first-name" />
                </label>
                <label htmlFor="second-name">Last name:
                    <input placeholder="Last name" required type="text" name="second-name" id="second-name" />
                </label>
                <label htmlFor="email">Email:
                    <input placeholder="Email: exemplemyemail@is.com" type="text" name="email" id="email" />
                </label>
                <label htmlFor="tel">Tel:
                    <input type="tel" placeholder="989007644" required name="tel" minLength={9} maxLength={12} id="tel" />
                </label>
                <label htmlFor="birth-date"> Birth Date:
                    <input required type="date" name="birth-date" id="birth-date" />
                </label>
                    <select name="country" required id="country">
                    <option >Select country</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Brasil">Brasil</option>
                    <option value="EUA">EUA</option>
                    <option value="Reino Unido">Reino unido</option>
                    <option value="Canada">Canada</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Angola">Angola</option>
                     <option value="Cabo verde">Cabo verde</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Australia">Australia</option>
                    <option value="China">China</option>
                    <option value="Japan">Japan</option>
                    <option value="Equador">Equador</option>
                    <option value="Burkina Faso">Burkina faso</option>
                    <option value="Russia">Russia</option>
                    </select>

                    <label htmlFor="cep">CEP:
                        <input required placeholder="5645" type="text" name="cep" id="cep"/>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Preferences</legend>
                    <label htmlFor="cupon">Do you have a discount coupon?
                     <input placeholder="NEWPROPO" type="text" name="cupon" id="cupon"/>
                    </label>
            
                    <label htmlFor="parcels">Choose parcels
                        <select name="parcels" id="parcels">
                      <option value={null}>Parcels</option>
                     <option value="3 months">To 3 months</option>
                    <option value="6 months">To 6 months</option>
                    <option value="9 months"> To 9 months</option>
                    <option value="12 months">1 1ear</option>
                        </select>
                     </label>
                </fieldset>
                <Button className='car-btn' text='Pay now' onClick={handleAdvertise} />
                </form>
        </main>
    )
}