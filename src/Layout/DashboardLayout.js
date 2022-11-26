import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
import Header from "../Pages/Shared/Header/Header";


const DashBoardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)
  const [isBuyer] = useBuyer(user?.email)
  return (
    <div>
        <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content bg-base-100">
            <>
              {
                isAdmin && <li>
                <Link to='/dashboard/my-buyer'>My Buyers</Link>
                <Link to='/dashboard/my-seller'>My Seller</Link>
                </li>
              }
            </>
            <>
              {
                isSeller && <li>
                <Link to='/dashboard/my-products'>My Products</Link>
                <Link to='/dashboard/add-product'>Add Product</Link>
                </li>
              }
            </>
            <>
              {
                isBuyer && <li>
                <Link to='/dashboard/My-orders'>My Orders</Link>
                </li>
              }
            </>
            {/* <li><Link to='/dashboard/My-orders'>My Orders</Link></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
