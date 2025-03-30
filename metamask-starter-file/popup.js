document.addeventListener ('DOMContentLoaded', function () {
    
    document.getElementById('accountList')
    .addEventListener('click', chnageAccount);

    document.getElementById('userAddress')
    .addEventListener('click', copyAddress);

    document.getElementById('transferFund')
    .addEventListener('click',handler );

    document.getElementById('header_network')
    .addEventListener('click',getOpenNetwork );

    document.getElementById('network_item')
    .addEventListener('click',getSelecteNetwork );

    document.getElementById('add_network')
    .addEventListener('click',setNetwork );

    document.getElementById('loginAccount')
    .addEventListener('click',loginUser );

    document.getElementById('accountCreate')
    .addEventListener('click', createUser);

    document.getElementById('openCreate')
    .addEventListener('click',openCreate );


    document.getElementById('sign_up')
    .addEventListener('click',signUp );

    document.getElementById('login_up')
    .addEventListener('click',login );

    document.getElementById('Logout')
    .addEventListener('click',logout );

    document.getElementById('open_Transfer')
    .addEventListener('click',openTransfer );

    document.getElementById('goBack')
    .addEventListener('click',goback );

    document.getElementById('open_Import')
    .addEventListener('click',openImport  );

    document.getElementById('open_assets')
    .addEventListener('click',openAssets );

    document.getElementById('open_activity')
    .addEventListener('click',openActivity );

    document.getElementById('goHomePage')
    .addEventListener('click',goHomePage );

    document.getElementById('opneAccountimport')
    .addEventListener('click',openImportModel);

    document.getElementById('close_import_account')
    .addEventListener('click',closeImportModel );

    document.getElementById('add_new_token')
    .addEventListener('click',addToken );

    document.getElementById('add_new_account')
    .addEventListener('click',addAccount );



});

let providerURL ='https://eth-mainnet.g.alchemy.com/v2/k4iwqu7ubU9nPnGHsHftZzufXkQ0_TAj/getNFTs/?owner=vitalik.eth';

//let provider;
let privateKey;
let address;


//functions

function handler() {

    document.getElementById('tranfer_center').style.display = 'flex';

    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;

    const private_key = "0x19CC8E9e303504EaF7fDdc8B51Bc036b53831150";

    const testAccount="0xb759970920913E48FCC36899B35801d920C06eA7";

    const provider = new ethers.providers.JsonRpcProvider(providerURL);
    const wallet = new ethers.Wallet(privatekey, provider);
    
    const tx = {
        to:address,
        value: ethers.utils.parseEther(amount),
}


let a =document.getElementById("link");
a.href="somelink url"

wallet.sendTransaction(tx).then(txogject => {
    console.log("txHash:", txogject.hash);

    document.getElementById('tranfer_center').style.display = 'none';
    const a=document.getElementById  ("link");

    document.getElementById("link").style.display = 'block';
});

}
function checkBlance(){
const provider=new ethers.providers.JsonRpcProvider(providerURL);
provider .getBalance(address).then((balance)=>{
    const balanceEth=ethers.utils.formatEther(balance);

    document.getElementById("accountBalance").innerHTML=`${balanceEth}MATIC`;

    document.getElementById("userAddress").innerHTML=`${address.slice(0,15)}...`;
})
}

function getOpenNetwork(){
document.getElementById("network").style.display="block";

}


function getSelecteNetwork(e){  
    const element = document.getElementById("selected_network");
    element.innerHTML=e.target.innerHTML;
    
    if(e.target.innerHTML==="Ethereum Mainnet"){
        providerURL="https://eth-mainnet.g.alchemy.com/v2/k4iwqu7ubU9nPnGHsHftZzufXkQ0_TAj";
        document.getElementById("network").style.display="none";

}else if(e.target.innerHTML==="Polygon Mumbai"){
    providerURL="https://rpc.ankr.com/polygon";
    document.getElementById("network").style.display="none";

}else if(e.target.innerHTML=="Polygon Mainnet"){
    providerURL="https://eth-mainnet.g.alchemy.com/v2/k4iwqu7ubU9nPnGHsHftZzufXkQ0_TAj/getNFTs/?owner=vitalik.eth";
    document.getElementById("network").style.display="none";
}
else if(e.target.innerHTML=="Holesky test network"){
    providerURL="https://rpc.ankr.com/eth_holesky/1c47b62690b2834e21a6db4ee62f50c9b7fcd61924a63657ebd55a6d9abe5a90";
    document.getElementById("network").style.display="none";
}else if(e.target.innerHTML=="sepolia test network"){
    providerURL="https://rpc.ankr.com/eth_sepolia/1c47b62690b2834e21a6db4ee62f50c9b7fcd61924a63657ebd55a6d9abe5a90";
    document.getElementById("network").style.display="none";}


    console.log(providerURL);
}

function setNetwork(){
 document.getElementById("network").style.display="none";
}

function loginUser(){
 document.getElementById("createAccount").style.display="none";
 document.getElementById("loginAccount").style.display="block";


}

function openCreate(){
    document.getElementById("createAccount").style.display="none";
    document.getElementById("create_popUp").style.display="block";
}

function signUp(){
const name = document.getElementById("sign_up_name").value;
const email = document.getElementById("sign_up_email").value;
const password = document.getElementById("sign_up_password").value;

const confirmPassword = document.getElementById("sign_up_PasswordConfirm").value;

document.getElementById("field").style.display = "none";
document.getElementById("center").style.display = "block";

const wallet = ethers.Wallet.createRandom();
if(wallet.address  ){
    console.log(wallet);
    //api call

    const url="http://localhost:3000/api/v1/user/signup";   
    const data={
        name:name,
        email:email,
        password:password,
        passwordConfirm:confirmPassword,
        address:wallet.address,
        privateKey:wallet.privateKey,
        mnemonic :wallet.mnemonic.phrase,
    }

fetch(url, {
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(data),
})
.then(response => response.json()).then ((result)=>{
    document.getElementById("createAddress").innerHTML=wallet.address;
    document.getElementById("createPrivateKey").innerHTML=wallet.privateKey;
    document.getElementById("createMnemonic").innerHTML=wallet.mnemonic.phrase;
    document.getElementById("center").style.display="none";
    document.getElementById("accountData").style.display="block";
    document.getElementById("sing_up").style.display="none";


    const userWallet = {
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic.phrase,
    };

    const jsonObj= JSON.stringify(userWallet);
    localStorage.setItem("userWallet", jsonObj);

    document.getElementById("goHomePage").style.display="block";
    window.location.reload();
}).catch((error) => {
    console.log(error);
});
}

}

function login(){
documnt.getElementById("login_form").style.display="none";
document.getElementById("center").style.display="block";

const email= document.getElementById("login_email").value;
const password= document.getElementById("login_password").value;

//api call
const url="http://localhost:3000/api/v1/user/login";
const data={
    email:email,
    password:password,

};

fetch(url, {
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(data),
}).then(response => response.json()).then ((result)=>{
    console.log(result);
    const userWallet={
        address: result.date.user.address,
        private_key: result.date.user.private_key,
        mnemonic: result.data.user.mnemonic,
    }
    const json=JSON.stringify(userWallet);
    localStorage.setItem("userWallet", json);
    window.location.reload();
}).catch((error)=>
{
    console.log(error);
})
}

function createUser(){
    document.getElementById("createAccount").style.display="block";
    document.getElementById("loginAccount").style.display="none";
}


function logout(){
localStorage.removeItem("userWallet");
window.location.reload();
}

function openTransfer(){

}

function goback(){

}

function importGoBack(){

}

function openActivity(){

}

function openAssets(){

}

function goHomePage(){

}

function openImport(){

}


function openImportModel(){

}

function closeImportModel(){

}

function addToken(){

}

function addAccount(){

}

function myFuction(){

}

function copyAddress(){

}

function chnageAccount(){

}