import React from "react";

export default menu => {
  return (
    <div className="item">
      <img
        src={menu.restaurant.imagefullpath}
        alt={menu.restaurant.displayname}
        title={menu.restaurant.displayname}
      />
      <h3>{menu.name}</h3>
      <p>{menu.description}</p>
      <p>Minimum paket tutarı: {menu.restaurant.minimumdeliveryprice}₺</p>
      <span>{menu.price}₺</span>
      <button
        onClick={() => {
          window.open(`http://yemeksepeti.com${menu.restaurant.seourl}`);
        }}
        className="button mobile-text-center mt10 launchaco-builder-hoverable mobile-text-center accent-bg primary-color"
      >
        Sepete Ekle
      </button>
    </div>
  );
};
