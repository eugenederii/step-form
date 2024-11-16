import thank from "../../assets/images/icon-thank-you.svg";

export const PageThankYou = () => {
  return (
    <div className="bg-white h-full text-center flex flex-col my-auto justify-center w-full rounded-lg shadow-xl md:shadow-none py-20 md:py-9 px-7 md:ml-8  md:mt-4">
      <div className="mb-6 md:mb-5 ">
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
