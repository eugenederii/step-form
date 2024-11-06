import thank from "../../assets/images/icon-thank-you.svg";

export const PageThankYou = () => {
  return (
    <div className="bg-white h-full text-center flex flex-col my-auto justify-center px-6 pt-6 md:px-8 md:pt-8 w-full rounded-lg shadow-xl md:shadow-none pb-24 md:pb-0">
      <div className="mb-3 md:mb-5">
        <img src={thank} className="w-20 h-20" alt="thank you" />
      </div>
      <h2 className="text-marine font-semibold text-3xl mb-3 md:mb-5">
        Thank you!
      </h2>
      <p className="text-cool-gray mdpx-[85px] text-center leading-6">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
