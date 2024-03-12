const fetchIPDetails = async (ip)=>{
    const url="https://api.tridentlab.in/ipinfo/";
    const idData= await fetch(`${url}${ip}`);
    const response= await idData.json();
    return response;
};

module.exports=fetchIPDetails;
