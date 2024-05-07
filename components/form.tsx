"use client";

import axios from "axios";
import React, { useState } from "react";

type StudentData = {
  hours_studied: number | undefined;
  previous_scores: number | undefined;
  extracurricular_activities: string | undefined;
  sleep_hours: number | undefined;
  sample_question_papers_practiced: number | undefined;
};

const Form = () => {
  const [formData, setFormData] = useState<StudentData>({
    hours_studied: undefined,
    previous_scores: undefined,
    extracurricular_activities: undefined,
    sleep_hours: undefined,
    sample_question_papers_practiced: undefined,
  });

  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `https://dma-student-app.onrender.com/`,
        formData
      );

      if (response.data.success) {
        console.log(response);
        setPrediction(response.data.predicted_performance);
      }
    } catch (err) {
      {
        console.log({ err });
      }
    }
    setLoading(false);
  };

  return (
    <form className="flex-shrink-0 flex-1" action="">
      <div className="max-w-2xl mx-auto  justify-center flex flex-col space-y-8">
        <label className="space-y-2 flex flex-col">
          <span className="text-lg">Hours Studied:</span>
          <input
            required
            type="number"
            placeholder="How many hours did you study?"
            name="hours_studied"
            value={formData.hours_studied}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <label className="space-y-2 flex flex-col">
          <span className="text-lg">Previous Scores:</span>
          <input
            required
            type="number"
            placeholder="Previous Score out of 100"
            name="previous_scores"
            value={formData.previous_scores}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <label className="space-y-2 flex flex-col">
          <span className="text-lg">Extracurricular Activities:</span>
          <div className="flex items-center space-x-2">
            <label>
              <input
                required
                type="radio"
                name="extracurricular_activities"
                value="yes"
                onChange={handleChange}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label>
              <input
                required
                type="radio"
                name="extracurricular_activities"
                value="no"
                onChange={handleChange}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </label>
        <label className="space-y-2 flex flex-col">
          <span className="text-lg">Sleep Hours(/day):</span>
          <input
            required
            type="number"
            placeholder="How much did you sleep?"
            name="sleep_hours"
            value={formData.sleep_hours}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <label className="space-y-2 flex flex-col">
          <span className="text-lg">Sample Question Papers Practiced:</span>
          <input
            required
            type="number"
            placeholder="How many papers did you solve?"
            name="sample_question_papers_practiced"
            value={formData.sample_question_papers_practiced}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <button
          onClick={handleSubmit}
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {!loading ? "Submit" : "loading..."}
        </button>
        {prediction && (
          <>
            <div className="flex justify-between gap-x-2 items-center bg-gray-100 p-4 rounded-md">
              <span className="text-gray-700">Predicted Performance</span>
              <span className="text-blue-500 font-bold">{prediction}</span>
            </div>
            <table className="border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Field</th>
                  <th className="border border-gray-300 p-2">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Hours Studied</td>
                  <td className="border border-gray-300 p-2">
                    {formData.hours_studied}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Previous Scores
                  </td>
                  <td className="border border-gray-300 p-2">
                    {formData.previous_scores}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Extracurricular Activities
                  </td>
                  <td className="border border-gray-300 p-2">
                    {formData.extracurricular_activities}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Sleep Hours(/day)
                  </td>
                  <td className="border border-gray-300 p-2">
                    {formData.sleep_hours}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Sample Question Papers Practiced
                  </td>
                  <td className="border border-gray-300 p-2">
                    {formData.sample_question_papers_practiced}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Predicted Performance
                  </td>
                  <td className="border border-gray-300 p-2">{prediction}</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between gap-x-2 items-center bg-gray-100 p-4 rounded-md">
              <span className="text-gray-700">
                Mean Squared Error for this model:{" "}
              </span>
              <span className="text-blue-500 font-bold">4.086049285029992</span>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default Form;
