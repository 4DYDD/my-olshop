import React, { Fragment } from "react";
import Card from "../../elements/Card";
import Nav from "./Nav";
import { useLoading } from "../../hooks/useLoading";
import LoadingScreen from "../LoadingScreen";

function Orders() {
  const isLoading = useLoading(1000);

  return (
    <>
      {isLoading && <LoadingScreen />}

      <Nav />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 max-w-[95rem] m-auto">
        {[1, 2, 3, 4, 5].map((value, index) => {
          return (
            <Fragment key={`${index}-orders`}>
              <Card className="shadow-md shadow-gray-300">
                <div className="p-5 w-[30rem]">
                  <div>Orders</div>
                  <div>Order ID</div>
                  <div>Tanggal Pemesanan</div>
                  <div>Nama Pelanggan</div>
                  <div>Status Pesanan</div>
                  <div>Total Harga</div>
                  <div>Metode Pembayaran</div>
                  <div>Metode Pengiriman</div>
                  <div>
                    <button>aksi 1</button>
                    <button>aksi 2</button>
                    <button>Detail</button>
                  </div>
                </div>
              </Card>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

export default Orders;
