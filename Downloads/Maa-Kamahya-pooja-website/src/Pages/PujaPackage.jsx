
import React from "react";
const PujaPackage = () => {
  const packages = [
    {
      title: "Homa & Naam Gotra Sankalp for Individual",
      price: "₹ 457",
      description: `Lord Krishna is considered the ultimate protector and guide, and worshipping him at Dwaraka is believed to bring peace, happiness, and prosperity into the lives of devotees.`,
      features: [
        "Pandit Ji will call out your name and gotra during the puja sankalp, along with the names of other puja participants.",
        "Pandit Ji will get in touch with you to complete your Pooja Sankalp.",
        "After the puja is offered, you will receive a video with your name & gotra chanting.",
        "No prasad will be shipped with this package.",
      ],
      btnText: "PARTICIPATE - ₹ 457/-",
    },
    {
      title: "Homa & Naam Gotra Sankalp For Couple",
      price: "₹ 961",
      description: `Lord Krishna is considered the ultimate protector and guide, and worshipping him at Dwaraka is believed to bring peace, happiness, and prosperity into the lives of devotees.`,
      features: [
        "Pandit Ji will call out your name and gotra during the puja sankalp, along with the names of other puja participants (Upto 2 Devotees).",
        "Pandit Ji will get in touch with you to complete your Pooja Sankalp.",
        "After the puja is offered, you will receive a video with your name & gotra chanting.",
        "After the completion of the puja, Prasad containing - Panchmeva, Chandan Tika, Ganda Mela, Bibhuti (Sacred Ash) and Photo will be delivered to your address within 8-10 days.",
      ],
      btnText: "PARTICIPATE - ₹ 961/-",
    },
    {
      title: "Homa & Naam Gotra Sankalp For Family",
      price: "₹ 1,645",
      description: `Lord Krishna is considered the ultimate protector and guide, and worshipping him at Dwaraka is believed to bring peace, happiness, and prosperity into the lives of devotees.`,
      features: [
        "Pandit Ji will call out your name and gotra during the puja sankalp, along with the names of other puja participants (Upto 3 Devotees).",
        "Pandit Ji will get in touch with you to complete your Pooja Sankalp.",
        "After the puja is offered, you will receive a video with your name & gotra chanting.",
        "After the completion of the puja, Prasad containing - Panchmeva, Chandan Tika, Ganda Mela, Bibhuti (Sacred Ash) and Photo will be delivered to your address within 8-10 days.",
      ],
      btnText: "PARTICIPATE - ₹ 1,645/-",
    },
  ];

  return (
    <div className="container my-5">
      <h4 className="text-center  mb-5">Select Puja Package</h4>
      <div className="row">
        {packages.map((pkg, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-header bg-danger text-white text-center">
                <h5 className="mb-1">{pkg.title}</h5>
                <p className="fw-bold mb-0">{pkg.price}</p>
              </div>
              <div className="card-body d-flex flex-column">
                <p className="text-muted mb-2">
                  <strong>{pkg.description}</strong>
                </p>
                <ul className="list-unstyled mb-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">
                      🕉️ {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-warning mt-auto fw-bold">
                  {pkg.btnText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PujaPackage;
