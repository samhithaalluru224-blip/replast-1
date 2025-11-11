import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext.jsx';
import assets, { dummyOrders } from '../../assets/assets';
import toast from 'react-hot-toast';

const Orders = () => {
  const { currency, axios } = useAppContext();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try{
      const {data} = await axios.get('/api/order/seller');
      if(data.success){
        setOrders(data.orders);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);  
    }
  }
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll">
      <div className="md:p-10 p-4 space-y-4">
        <h2 className="text-lg font-medium mb-4">Orders List</h2>
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-5 justify-between items-center p-5 max-w-6xl rounded-md border border-gray-300"
          >
            {/* Items */}
            <div className="flex gap-3 items-center flex-1 min-w-[200px]">
              <img className="w-12 h-12 object-cover" src={assets.box_icon} alt="boxIcon" />
              <div className="flex flex-col">
                {order.items.map((item, idx) => (
                  <p key={idx} className="font-medium">
                    {item.product.name} <span className="text-primary">x {item.quantity}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="text-sm md:text-base text-black/60 flex-1 min-w-[200px]">
              <p className="text-black/80">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>
                {order.address.street}, {order.address.city}
              </p>
              <p>
                {order.address.state}, {order.address.zipcode}, {order.address.country}
              </p>
              <p>{order.address.phone}</p>
            </div>

            {/* Amount */}
            <div className="font-medium text-lg my-auto flex-1 text-center min-w-[100px]">
              {currency}
              {order.amount}
            </div>

            {/* Payment Info */}
            <div className="flex flex-col text-sm md:text-base text-black/60 flex-1 min-w-[150px]">
              <p>Method: {order.paymentType}</p>
              <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
