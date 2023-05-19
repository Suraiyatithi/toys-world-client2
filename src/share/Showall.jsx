import { useLoaderData } from "react-router-dom";


const Showall = () => {
    const toyInfo=useLoaderData();
    const {_id,sellerName,toyName,subCategory,price,availableQuantity,picture,description}=toyInfo;
    return (
        <div>
            
        </div>
    );
};

export default Showall;