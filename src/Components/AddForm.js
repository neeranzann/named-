import React from 'react'




import {
    Button,
    Checkbox,
    Input,
    Option,
    Radio,
    Select,
    Textarea
  } from "@material-tailwind/react";
  import { useFormik } from 'formik';
  import * as Yup from 'yup';
  import { useDispatch } from 'react-redux';
  import { addUser } from '../features/infoSlice';
  import { useNavigate } from 'react-router';
  import { nanoid } from '@reduxjs/toolkit';
  

const AddForm = () => {



    const dispatch = useDispatch();
  const nav = useNavigate();

  const infoSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    name: Yup.string().min(5, 'Too Short!').max(50, 'Too Long!')
      .required('Required'),
    gender: Yup.string().required('Required'),
    skills: Yup.array().required('Required'),
    country: Yup.string().required('cointry is Required'),
    detail: Yup.string().required('deatil is required'),
    image: Yup.mixed().test('fileType', 'Invalid file type', (value) =>
      value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type)
    ).test('fileSize', 'File too large', (value) =>
      value && value.size <= 10 * 1024 * 1024 // 10 MB
    )
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      gender: '',
      skills: [],
      country: '',
      detail: '',
      review: '',
      image: null
    },
    onSubmit: (val) => {
      dispatch(addUser({
        email: val.email,
        name: val.name,
        gender: val.gender,
        skills: val.skills,
        country: val.country,
        detail: val.detail,
        review: val.review,
        id: nanoid()
      }));
      nav(-1);

    },
    validationSchema: infoSchema
  });

  const radioData = [
    { id: 'male', name: 'gender', value: 'male', label: 'Male' },
    { id: 'female', name: 'gender', value: 'female', label: 'Female' },
    { id: 'other', name: 'gender', value: 'other', label: 'Other' },
  ];

  const checkData = [
    { id: 'python', name: 'skills', value: 'python', label: 'Python' },
    { id: 'css', name: 'skills', value: 'css', label: 'Css' },
    { id: 'javascript', name: 'skills', value: 'javascript', label: 'Javascript' },

  ];

  return (
    <div className='max-w-2xl p-10 shadow-xl mx-auto' >
      <form onSubmit={formik.handleSubmit} className='space-y-5' >
        <h1 className='text-2xl'>Add Your Base Info</h1>
        <div className='space-y-1'>
          <Input error={formik.errors.email && formik.touched.email ? true : false} type='email' label='Email' name='email' onChange={formik.handleChange} value={formik.values.email} />
          {formik.errors.email && formik.touched.email && <h1 className='text-pink-500'>{formik.errors.email}</h1>}
        </div>



        <div className='space-y-1'>
          <Input type='text' label='Your Name' name='name' onChange={formik.handleChange} value={formik.values.name} />
          {formik.errors.name && formik.touched.name && <h1 className='text-pink-500'>{formik.errors.name}</h1>}
        </div>


        <div>
          <h1>Your Gender</h1>
          <div className='flex gap-10'>
            {radioData.map((d) => {
                return <Radio key={d.id} id={d.id} name={d.name} label={d.label} value={d.value} onChange={formik.handleChange} />;
            })}

          </div>
          {formik.errors.gender && formik.touched.gender && <h1 className='text-pink-500'>{formik.errors.gender}</h1>}

        </div>


        <div className='space-y-2'>

          <Input
            onChange={(e) => {
              const imageFile = e.target.files[0];
              formik.setFieldValue('image', imageFile);

              const reader = new FileReader();
              reader.readAsDataURL(imageFile);
              reader.addEventListener('load', () => {
                formik.setFieldValue('review', reader.result)
              })


            }}
            type='file' id='image' label='image' name='image' accept='image/*' />

          {formik.values.review && !formik.errors.image ? <img style={{ height: 150, with: 250 }} src={formik.values.review} alt="" /> : null}

          {formik.errors.image && formik.touched.image && <h1 className='text-pink-500'>{formik.errors.image}</h1>}

        </div>










        <div>
          <h1>Your Skills</h1>
          <div className='flex gap-10'>
            {checkData.map((c) => {
              return <Checkbox key={c.id} label={c.label} name={c.name} value={c.value} onChange={formik.handleChange} />;
            })}

          </div>
          {formik.errors.skills && formik.touched.skills && <h1 className='text-pink-500'>{formik.errors.skills}</h1>}
        </div>

        <div className="w-72 space-y-2">
          <Select label="Select Country" name='country' onChange={(e) => formik.setFieldValue('country', e)}  >
            <Option value='nepal'>Nepal</Option>
            <Option value='china'>China</Option>
            <Option value='india'>India</Option>
          </Select>
          {formik.errors.country && formik.touched.country && <h1 className='text-pink-500'>{formik.errors.country}</h1>}
        </div>

        <div className="w-96 space-y-2">
          <Textarea value={formik.values.detail} onChange={formik.handleChange} label="Your Detail" name='detail' id='detail' />
          {formik.errors.detail && formik.touched.detail && <h1 className='text-pink-500'>{formik.errors.detail}</h1>}
        </div>

        <Button type='submit'>Submit</Button>

      </form>

    </div>
  )
}


  


export default AddForm
