import React from "react";
import '../css/home.css'
import img1 from '../images/97bf025c-f84d-4e02-9d21-647c7639ffac.png';
import img2 from '../images/example/40036b27-3fae-4087-8100-c4a0924428d0.png';
import img3 from '../images/example/9d79c1df-b8b4-49f7-9a1a-f632546c309c.png';
import img4 from '../images/example/cecee1da-8b3e-4550-a19b-31d1214c1523.png';
import img5 from '../images/example/b50bdc03-233a-4e62-883d-a9cb078549af.png';
import img6 from '../images/example/c8a42b4c-0bb3-4e0b-8edb-176d0e05d588.png';
import img7 from '../images/example/558935d4-0fe0-4ecc-b899-32d1938b7cde.png';
import img8 from '../images/example/09da5f6a-72c9-4ebe-8cc8-9d858e5b0bf5.png';
import img9 from '../images/example/2bbbc4da-0f7f-4c05-b836-5128e4d6ad87.png';
import img10 from '../images/example/5b33f39f-3df5-4ac9-98fe-66e2e0cfc45c.png';
import { Card, Typography } from 'antd';

const { Text } = Typography;

function Home(){
    return(
        <div className="customer-journey-home">

          <div className="bg-white">
              <div className="px-4 xl:px-40 md:px-12 md:py-4"
                 style={{
                  width: "80%",
                  margin: "0 auto"}}>
                  <h1 className="text-2xl font-bold text-gray-700 md:text-4xl">
                    About Business Portal
                  </h1>
                  <p className="mt-2 text-base leading-relaxed text-justify">
                  The national business portal is a one-stop portal for e-government services that 
                  improves ease of doing business in Ethiopia through the automation of essential government 
                  services leveraging information and communication technologies.It is designed to provide a common
                  platform and generic tools for online transactional services.The portal’ s role as a platform is 
                  the provision of centralized information about government services such as procedure, time and cost.
                  In addition, it facilitates customer journey for a particular government service, track the status of service requests, and provide important alerts.This platform is initiated by the government of Ethiopia aiming to make government services more accessible online, reduce cost of transactions and improve turnaround time to citizens, non - citizens, businesses, and governmental & non - governmental organizations.


                  </p>
                </div>
                <div className="min-h-full pb-20 xl:px-24 md:px-12">
                  <hr className="ant-divider ant-divider-horizontal" />
                  <div className="pb-3" style={{ textAlign: "center" }}>
                    <h1 className="text-xl font-bold text-gray-700 md:text-3xl">
                      What Can We Do For You Today?
                    </h1>
                </div>
                <div className="grid">
                      <div className="w-1/2 xl:w-1/5 lg:w-1/4 md:w-1/3">
                        <a href="/business/need/aa1410ad-2ea8-4ce3-ac24-82bea475f5e5">
                          <Card className="card rounded-md shadow-sm hover:shadow-md hover:text-gray-700 ant-card ant-card-bordered">
                            <div className="ant-card-cover">
                              <div className="w-full h-full overflow-hidden">
                                <img alt="example" className="w-full h-full inner-img" src={img1} />
                                
                              </div>
                            </div>
                            <div className="ant-card-body">
                              
                                <div className="ant-card-meta-description">
                                  <div className="h-10">
                                    <Text className="text-sm font-bold text-center text-gray-700">Protecting Minority Investments</Text>
                                  </div>
                                </div>
                              
                            </div>
                          </Card>
                        </a>
                      </div>


                      
                       <div className="w-1/2 xl:w-1/5 lg:w-1/4 md:w-1/3">
                        <a href="/business/need/aa1410ad-2ea8-4ce3-ac24-82bea475f5e5">
                          <Card className="card rounded-md shadow-sm hover:shadow-md hover:text-gray-700 ant-card ant-card-bordered">
                            <div className="ant-card-cover">
                              <div className="w-full h-full overflow-hidden">
                                <img alt="example" className="w-full h-full inner-img" src={img2} />
                              </div>
                            </div>
                            <div className="ant-card-body">
                              
                                <div className="ant-card-meta-description">
                                  <div className="h-10">
                                    <Text className="text-sm font-bold text-center text-gray-700">Paying Taxes</Text>
                                  </div>
                                </div>
                              
                            </div>
                          </Card>
                        </a>
                      </div>
                      <div className="w-1/2 xl:w-1/5 lg:w-1/4 md:w-1/3">
                        <a href="/business/need/aa1410ad-2ea8-4ce3-ac24-82bea475f5e5">
                          <Card className="card rounded-md shadow-sm hover:shadow-md hover:text-gray-700 ant-card ant-card-bordered">
                            <div className="ant-card-cover">
                              <div className="w-full h-full overflow-hidden">
                                <img alt="example" className="w-full h-full inner-img" src={img3} />
                              </div>
                            </div>
                            <div className="ant-card-body">
                              
                                <div className="ant-card-meta-description">
                                  <div className="h-10">
                                    <Text className="text-sm font-bold text-center text-gray-700">Enforcing Contracts</Text>
                                  </div>
                                </div>
                              
                            </div>
                          </Card>
                        </a>
                      </div>
                      <div className="w-1/2 xl:w-1/5 lg:w-1/4 md:w-1/3">
                        <a href="/business/need/aa1410ad-2ea8-4ce3-ac24-82bea475f5e5">
                          <Card className="card rounded-md shadow-sm hover:shadow-md hover:text-gray-700 ant-card ant-card-bordered">
                            <div className="ant-card-cover">
                              <div className="w-full h-full overflow-hidden">
                                <img alt="example" className="w-full h-full inner-img" src={img4} />
                              </div>
                            </div>
                            <div className="ant-card-body">
                              
                                <div className="ant-card-meta-description">
                                  <div className="h-10">
                                    <Text className="text-sm font-bold text-center text-gray-700">Starting a Business</Text>
                                  </div>
                                </div>
                              
                            </div>
                          </Card>
                        </a>
                      </div>
                      <div className="w-1/2 xl:w-1/5 lg:w-1/4 md:w-1/3">
                        <a href="/business/need/aa1410ad-2ea8-4ce3-ac24-82bea475f5e5">
                          <Card className="card rounded-md shadow-sm hover:shadow-md hover:text-gray-700 ant-card ant-card-bordered">
                            <div className="ant-card-cover">
                              <div className="w-full h-full overflow-hidden">
                                <img alt="example" className="w-full h-full inner-img" src={img5} />
                              </div>
                            </div>
                            <div className="ant-card-body">
                              
                                <div className="ant-card-meta-description">
                                  <div className="h-10">
                                    <Text className="text-sm font-bold text-center text-gray-700">Getting Credit</Text>
                                  </div>
                                </div>
                              
                            </div>
                          </Card>
                        </a>
                      </div>
                      <div className="w-1/2 xl:w-1/5 lg:w-1/4 md:w-1/3">
                        <a href="/business/need/aa1410ad-2ea8-4ce3-ac24-82bea475f5e5">
                          <Card className="card rounded-md shadow-sm hover:shadow-md hover:text-gray-700 ant-card ant-card-bordered">
                            <div className="ant-card-cover">
                              <div className="w-full h-full overflow-hidden">
                                <img alt="example" className="w-full h-full inner-img" src={img6}/>
                              </div>
                            </div>
                            <div className="ant-card-body">
                              
                                <div className="ant-card-meta-description">
                                  <div className="h-10">
                                    <Text className="text-sm font-bold text-center text-gray-700">Getting Electricity</Text>
                                  </div>
                                </div>
                              
                            </div>
                          </Card>
                        </a>
                      </div>
                      <div className="w-1/2 xl:w-1/5 lg:w-1/4 md:w-1/3">
                        <a href="/business/need/aa1410ad-2ea8-4ce3-ac24-82bea475f5e5">
                          <Card className="card rounded-md shadow-sm hover:shadow-md hover:text-gray-700 ant-card ant-card-bordered">
                            <div className="ant-card-cover">
                              <div className="w-full h-full overflow-hidden">
                                <img alt="example" className="w-full h-full inner-img" src={img7} />
                              </div>
                            </div>
                            <div className="ant-card-body">
                              
                                <div className="ant-card-meta-description">
                                  <div className="h-10">
                                    <Text className="text-sm font-bold text-center text-gray-700">Dealing With Construction Permits</Text>
                                  </div>
                                </div>
                              
                            </div>
                          </Card>
                        </a>
                      </div>
                      <div className="w-1/2 xl:w-1/5 lg:w-1/4 md:w-1/3">
                        <a href="/business/need/aa1410ad-2ea8-4ce3-ac24-82bea475f5e5">
                          <Card className="card rounded-md shadow-sm hover:shadow-md hover:text-gray-700 ant-card ant-card-bordered">
                            <div className="ant-card-cover">
                              <div className="w-full h-full overflow-hidden" >
                                <img alt="example" className="w-full h-full inner-img" src={img8} />
                              </div>
                            </div>
                            <div className="ant-card-body">
                              
                                <div className="ant-card-meta-description">
                                  <div className="h-10">
                                    <Text className="text-sm font-bold text-center text-gray-700">Trading Across Borders</Text>
                                  </div>
                                </div>
                              
                            </div>
                          </Card>
                        </a>
                      </div>
                      <div className="w-1/2 xl:w-1/5 lg:w-1/4 md:w-1/3">
                        <a href="/business/need/aa1410ad-2ea8-4ce3-ac24-82bea475f5e5">
                          <Card className="card rounded-md shadow-sm hover:shadow-md hover:text-gray-700 ant-card ant-card-bordered">
                            <div className="ant-card-cover">
                              <div className="w-full h-full overflow-hidden">
                                <img alt="example" className="w-full h-full inner-img" src={img9} />
                              </div>
                            </div>
                            <div className="ant-card-body">
                              
                                <div className="ant-card-meta-description">
                                  <div className="h-10">
                                    <Text className="text-sm font-bold text-center text-gray-700">Resolving Insolvency</Text>
                                  </div>
                                </div>
                              
                            </div>
                          </Card>
                        </a>
                      </div>
                      <div className="w-1/2 xl:w-1/5 lg:w-1/4 md:w-1/3">
                        <a href="/business/need/aa1410ad-2ea8-4ce3-ac24-82bea475f5e5">
                          <Card className="card rounded-md shadow-sm hover:shadow-md hover:text-gray-700 ant-card ant-card-bordered">
                            <div className="ant-card-cover">
                              <div className="w-full h-full overflow-hidden">
                                <img alt="example" className="w-full h-full inner-img" src={img10}/>
                              </div>
                            </div>
                            <div className="ant-card-body">
                              
                                <div className="ant-card-meta-description">
                                  <div className="h-10">
                                    <Text className="text-sm font-bold text-center text-gray-700">Registering Property</Text>
                                  </div>
                                </div>
                              
                            </div>
                          </Card>
                        </a>
                      </div>
                    </div>
                </div>
            </div>
          </div>
    )
}

export default Home;