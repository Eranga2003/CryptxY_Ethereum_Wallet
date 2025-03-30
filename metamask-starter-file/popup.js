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


//function

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

}

function getOpenNetwork(){

}


function getSelecteNetwork(){    

}

function setNetwork(){

}

function loginUser(){

}

function openCreate(){

}

function signUp(){

}

function login(){

}

function createUser(){

}


function logout(){

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