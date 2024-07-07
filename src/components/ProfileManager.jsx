import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './ProfileManager.css';

// Validation schema
const schema = yup.object().shape({
  position: yup.string().required('Position is required'),
  company: yup.string().required('Company is required'),
  startDate: yup.string().required('Start Date is required'),
  endDate: yup.string().required('End Date is required'),
  description: yup.string().required('Description is required'),
  skill: yup.string().required('Skill is required'),
  resume: yup.mixed().required('Resume is required'),
});

const ProfileManager = () => {
  const [resume, setResume] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmitExperience = (data) => {
    setExperiences([...experiences, data]);
    reset({ position: '', company: '', startDate: '', endDate: '', description: '' });
  };

  const onSubmitSkill = (data) => {
    setSkills([...skills, data.skill]);
    reset({ skill: '' });
  };

  const handleFileUpload = (e) => {
    setResume(e.target.files[0]);
  };

  const handleDeleteSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleDeleteExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return (
    <div className="profile-manager">
      <h1>Profile Overview</h1>
      <p>Summary of your work experience and skills.</p>

      <div className="section">
        <h2>Work Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <h3>{experience.position}</h3>
            <p>{experience.company} | {experience.startDate} - {experience.endDate}</p>
            <p>{experience.description}</p>
            <button onClick={() => handleDeleteExperience(index)}>Delete</button>
          </div>
        ))}
        <form onSubmit={handleSubmit(onSubmitExperience)}>
          <div className="form-group">
            <input
              type="text"
              name="position"
              placeholder="Position"
              {...register('position')}
            />
            {errors.position && <p>{errors.position.message}</p>}
            <input
              type="text"
              name="company"
              placeholder="Company"
              {...register('company')}
            />
            {errors.company && <p>{errors.company.message}</p>}
            <input
              type="text"
              name="startDate"
              placeholder="Start Date"
              {...register('startDate')}
            />
            {errors.startDate && <p>{errors.startDate.message}</p>}
            <input
              type="text"
              name="endDate"
              placeholder="End Date"
              {...register('endDate')}
            />
            {errors.endDate && <p>{errors.endDate.message}</p>}
            <textarea
              name="description"
              placeholder="Description"
              {...register('description')}
            />
            {errors.description && <p>{errors.description.message}</p>}
            <button type="submit">Add Work Experience</button>
          </div>
        </form>
      </div>

      <div className="section">
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span>{skill}</span>
            <button onClick={() => handleDeleteSkill(index)}>Delete</button>
          </div>
        ))}
        <form onSubmit={handleSubmit(onSubmitSkill)}>
          <div className="form-group">
            <input
              type="text"
              name="skill"
              placeholder="New Skill"
              {...register('skill')}
            />
            {errors.skill && <p>{errors.skill.message}</p>}
            <button type="submit">Add New Skill</button>
          </div>
        </form>
      </div>

      <div className="section">
        <h2>Resume Management</h2>
        <input
          type="file"
          name="resume"
          {...register('resume')}
          onChange={handleFileUpload}
        />
        {errors.resume && <p>{errors.resume.message}</p>}
        {resume && (
          <div className="resume-info">
            <p>{resume.name}</p>
            <button>Preview</button>
            <button>Download</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileManager;
