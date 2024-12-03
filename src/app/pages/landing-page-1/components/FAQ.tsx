import React from "react";

const FAQ = () => {
  return (
    <div className="px-3 md:px-5 lg:px-8 py-8 flex flex-wrap row-gap-7">
      <div className="flex gap-4 w-full lg:w-6  p-2">
        <i className="pi pi-question-circle text-6xl mt-1 custom-primary-color"></i>
        <div>
          <p className="font-bold text-2xl text-gray-900">
            What’s the best diet for weight loss?
          </p>
          <p className="mt-5 text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit
            nibh, tempor in gravida quis, faucibus sit amet dolor. Integer
            hendrerit lacus tempor nibh luctus, mollis elementum nisi
            vestibulum. Praesent vel lacus et purus vulputate mollis.
          </p>
        </div>
      </div>
      <div className="flex gap-4 w-full lg:w-6  p-2">
        <i className="pi pi-question-circle text-6xl mt-1 custom-primary-color"></i>
        <div>
          <p className="font-bold text-2xl text-gray-900">
            What is the best way to get vitamin B12?
          </p>
          <p className="mt-5 text-gray-600 text-lg">
            Nulla sit amet varius risus, quis pretium ante. Nulla facilisi. Nunc
            sed ipsum nisi. Mauris eu dui porta mi porta sollicitudin. Proin eu
            sapien at libero scelerisque faucibus vitae sed sem. Pellentesque
            laoreet nisi vitae cursus aliquam. Integer diam
          </p>
        </div>
      </div>
      <div className="flex gap-4 w-full lg:w-6  p-2">
        <i className="pi pi-question-circle text-6xl mt-1 custom-primary-color"></i>
        <div>
          <p className="font-bold text-2xl text-gray-900">
            Should I be on a gluten-free diet?
          </p>
          <p className="mt-5 text-gray-600 text-lg">
            Duis eu diam eget felis pharetra vehicula. Vivamus at pretium lacus.
            Vestibulum in eros ullamcorper, volutpat nisl et, iaculis leo.
            Mauris venenatis turpis vitae leo accumsan, at malesuada nisi
            faucibus. Proin efficitur suscipit dolor eget laoreet.
          </p>
        </div>
      </div>
      <div className="flex gap-4 w-full lg:w-6  p-2">
        <i className="pi pi-question-circle text-6xl mt-1 custom-primary-color"></i>
        <div>
          <p className="font-bold text-2xl text-gray-900">
            Do you recommend a vegetarian diet?
          </p>
          <p className="mt-5 text-gray-600 text-lg">
            Praesent ultrices ante ut lorem efficitur mollis. Nulla ipsum risus,
            consectetur ac nunc eget, consequat volutpat leo. Donec enim massa,
            porta a lobortis eu, molestie ac elit. Ut dictum imperdiet est, ac
            sodales orci suscipit nec.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
