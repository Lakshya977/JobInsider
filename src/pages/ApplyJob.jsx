import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Loading from '../Components/loading';
import Navbar from '../Components/Navbar';
import { assets, jobsData } from '../assets/assets';
import kconvert from 'k-convert';
import moment from 'moment';

const ApplyJob = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);
  const [loading, setLoading] = useState(true); // Adding loading state

  useEffect(() => {
    const fetchJob = async () => {
      const data = jobs.find(job => job._id === id);
      if (data) {
        setJobData(data);
      } else {
        setJobData(null);
      }
      setLoading(false); 
    };
    fetchJob();
  }, [id, jobs]);

  if (loading) {
    return <Loading />;
  }

  if (!jobData) {
    return <div>Job not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto bg-[#f7f3ff] shadow-md rounded-xl p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
              <img src={jobData.companyId.image} alt="" className="w-full h-full object-contain rounded-md" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{jobData.title}</h1>
              <div className="flex flex-wrap gap-4 text-gray-700 text-sm">
                <span className="flex items-center gap-2">
                  <img src={assets.suitcase_icon} alt="" className="w-4 h-4" />
                  {jobData.companyId.name}
                </span>
                <span className="flex items-center gap-2">
                  <img src={assets.location_icon} alt="" className="w-4 h-4" />
                  {jobData.location}
                </span>
                <span className="flex items-center gap-2">
                  <img src={assets.person_icon} alt="" className="w-4 h-4" />
                  {jobData.level}
                </span>
                <span className="flex items-center gap-2">
                  <img src={assets.money_icon} alt="" className="w-4 h-4" />
                  CTC: {kconvert.convertTo(jobData.salary)}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition" disabled={loading}>
              Apply Now
            </button>
            <p className="text-sm text-gray-500 sm:ml-4">
              Posted {moment(jobData.date).fromNow()}
            </p>
          </div>
        </div>
        <div>
        <div className="mt-8">
      <h2 className="font-bold text-2xl mb-4">Job Description</h2>
      <div
        className="rich-text bg-white p-6 rounded-lg shadow-md"
        dangerouslySetInnerHTML={{ __html: jobData.description }}
      />
      <button
        className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition mt-6"
        disabled={loading}
      >
        Apply Now
      </button>
    </div>
  </div>
      </div>
    </>
  );
};

export default ApplyJob;
