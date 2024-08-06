import React from 'react'

const Timeline = () => {
  return (
    <>
    <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-primary sm:bg-[#F1FAFF]">
          <div class="py-3 sm:max-w-4xl sm:mx-auto w-full px-2 sm:px-4">
            <div class="relative text-gray-700 antialiased text-sm font-semibold">
              {/* <!-- Vertical bar running through middle -->     */}
              <div class="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

              {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
              <div class="mt-6 sm:mt-0 sm:mb-12 transition-transform ease-in-out duration-300 transform hover:scale-105">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-start w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pr-14">
                      <div class="p-5 bg-white rounded shadow-xl drop-shadow-lg">
                        <h1 className="text-base font-bold text-primary">
                          Business Analysis:
                        </h1>
                        <p className="text-xs">
                          We assist you in figuring out your requirements and
                          evaluating your current tech setup. Together, we
                          determine if investing in AI makes sense compared to
                          traditional development. Additionally, we outline the
                          functional and non-functional needs for your future
                          solution.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="rounded-full bg-primary border-white text-white border-4  w-8 h-8 sm:h-12 sm:w-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    01
                  </div>
                </div>
              </div>

              {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
              <div class="mt-6 sm:mt-0 sm:mb-12 transition-transform ease-in-out duration-300 transform hover:scale-105">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-14">
                      <div class="p-5 bg-white rounded shadow-xl drop-shadow-lg">
                        <h1 className="text-base font-bold text-primary">
                          Initial Data Analysis:
                        </h1>
                        <p className="text-xs">
                          We conduct a comprehensive analysis to identify and
                          evaluate various data sources. These may encompass the
                          customer's proprietary corporate data assets as well
                          as information available in public databases.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="rounded-full bg-primary border-white text-white border-4  w-8 h-8 sm:h-12 sm:w-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    02
                  </div>
                </div>
              </div>

              {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
              <div class="mt-6 sm:mt-0 sm:mb-12 transition-transform ease-in-out duration-300 transform hover:scale-105">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-start w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pr-14">
                      <div class="p-5 bg-white rounded shadow-xl drop-shadow-lg">
                        <h1 className="text-base font-bold text-primary">
                          Solution Design:
                        </h1>
                        <p className="text-xs">
                          {" "}
                          After assessing the technical and business aspects, we
                          choose the right technology stack, plan out the
                          product's structure, and outline an implementation
                          strategy. If needed, we can also offer a Proof of
                          Concept (PoC) to check if the solution is doable and
                          economically viable, and to identify any potential
                          limitations.
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="rounded-full bg-primary border-white text-white border-4  w-8 h-8 sm:h-12 sm:w-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    03
                  </div>
                </div>
              </div>

              {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
              <div class="mt-6 sm:mt-0 transition-transform ease-in-out duration-300 transform hover:scale-105">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-14">
                      <div class="p-5 bg-white rounded shadow-xl drop-shadow-lg">
                        <h1 className="text-base font-bold text-primary">
                          Building the AI Solution:{" "}
                        </h1>
                        <p className="text-xs">
                          We conduct data pre-processing, involving tasks such
                          as cleansing, annotation, and transformation.
                          Following this, we define the evaluation criteria for
                          the solution and train an AI model using supervised,
                          unsupervised, and reinforcement approaches. To ensure
                          the desired output, we can construct an ensemble of AI
                          and machine learning models.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="rounded-full bg-primary border-white text-white border-4  w-8 h-8 sm:h-12 sm:w-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    04
                  </div>
                </div>
              </div>

              {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
              <div class="mt-6 sm:mt-0 sm:mb-12 transition-transform ease-in-out duration-300 transform hover:scale-105">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-start w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pr-14">
                      <div class="p-5 bg-white rounded shadow-xl drop-shadow-lg">
                        <h1 className="text-base font-bold text-primary">
                          Model Integration and Deployment:
                        </h1>
                        <p className="text-xs">
                          {" "}
                          We seamlessly incorporate the trained model into the
                          software architecture, empowering AI-based modules and
                          functionalities with its output. Subsequently, we
                          deploy the AI solution either on-premise or in a
                          cloud-based environment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="rounded-full bg-primary border-white text-white border-4 w-8 h-8 sm:h-12 sm:w-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    05
                  </div>
                </div>
              </div>

              {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
              <div class="mt-6 sm:mt-0 transition-transform ease-in-out duration-300 transform hover:scale-105">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pl-14">
                      <div class="p-5 bg-white rounded shadow-xl drop-shadow-lg">
                        <h1 className="text-base font-bold text-primary">
                          Support:
                        </h1>
                        <p className="text-xs">
                          {" "}
                          We offer continuous support, maintenance, and regular
                          updates following DevOps best practices. This
                          encompasses refining the accuracy of the AI model
                          output by consistently updating the solution with new
                          data sets.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="rounded-full bg-primary border-white text-white border-4 w-8 h-8 sm:h-12 sm:w-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    06
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Timeline
