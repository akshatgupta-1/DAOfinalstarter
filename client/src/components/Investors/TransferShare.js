import "./investors.css"
function TransferShare({state,account}){
    async function transfershare(event){

    try{

        event.preventDefault();
        const {contract} = state;
        const amount = document.querySelector("#amount").value;
        const address = document.querySelector("#to").value;

        await contract.methods.transferShare(amount,address).send({from : account, gas : 480000});


    }catch(error){
        alert(error)
    }
    window.location.reload()
    }

    return<><form onSubmit = {transfershare}>
    <label className="label1" htmlFor="amount">
    <span className="font">Amount:</span>
        </label>
    <input type="text" id="amount"></input>
    <label className="label1" htmlFor="to">
    <span className="font">Address:</span>
        </label>
    <input type="text" id="to"></input>
    
    <button className="button" type="submit">Transfer Share</button>
    </form><br></br></>
   }
   export default TransferShare;