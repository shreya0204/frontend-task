import { useEffect, useState } from 'react'
import { getAllProductsData } from '../../api/Products'
import { useAuth } from '../../store/Auth';

const AllProducts = () => {

    const [productData, setProductData] = useState(null);
    const user = useAuth();

    console.log(user);

    const getProductsData = async () => {
        const data = await getAllProductsData();
        setProductData(data)
    }

    useEffect(() => {
        getProductsData()
    }, [])

    return (
        <>
            {
                productData && <div>
                    <div>Hi {user.userDetails.username} All Products</div>
                    {
                        productData.map((prod) => {
                            return (
                                <div key={prod.id}>
                                    <img src={prod.image} alt="product" />
                                    <p>{prod.description}</p>
                                    <p>{prod.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </>
    )
}
export default AllProducts