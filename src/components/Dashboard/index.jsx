import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { uuid } from '../../utils';
import { BACKEND_DOMAIN_API } from '../../global/Backend-api';
import axios from 'axios';
import "./style.scss";
import Product from '../Products/Products';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const [value, setValue] = React.useState(0);
  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      id: uuid(),
      title: '',
      price: '',
      image: '',
      category: '',
      ordinal: '',
      description: ''
    },
    onSubmit(values) {
      console.log(values);
      handleFeedback(values);
    }
  })
  const handleFeedback = async (products) => {
    const requestFeedback = await axios.post(`${BACKEND_DOMAIN_API}/api/v1/products`, products);
    if (requestFeedback.status === 201) {
      alert("Gửi feedback thành công!");
    }
  }
  const handleChange2 = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange2}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Products" {...a11yProps(0)} />
        <Tab label="Feedbacks" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <input type="text" name="title" placeholder='title' value={values.title} onChange={handleChange} onBlur={handleBlur} />
          </div>
          <div className='row'>
            <input type="text" name="price" placeholder='price' value={values.price} onChange={handleChange} onBlur={handleBlur} />
          </div>
          <div className='row'>
            <input type="text" name="image" placeholder='image' value={values.image} onChange={handleChange} onBlur={handleBlur} />
          </div>
          <div className='row'>
            <input type="text" name="category" placeholder='category' value={values.category} onChange={handleChange} onBlur={handleBlur} />
          </div>
          <div className='row'>
            <input type="text" name="ordinal" placeholder='ordinal' value={values.ordinal} onChange={handleChange} onBlur={handleBlur} />
          </div>
          <div className='row'>
            <input type="text" name="description" placeholder='description' value={values.description} onChange={handleChange} onBlur={handleBlur} />
          </div>

          <button type="submit">Gửi</button>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}