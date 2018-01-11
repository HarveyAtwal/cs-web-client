import React from 'react'
import classNames from 'classnames';
import './styles.scss'

const icons = {
  'down-caret': "M316 334l196 196 196-196 60 60-256 256-256-256z",
  'menu': "M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z",
  'avatar': "M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z",
  'portfolio': 'M554 128h342v256h-342v-256zM554 896v-426h342v426h-342zM128 896v-256h342v256h-342zM128 554v-426h342v426h-342z',
  'settings': 'M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z',
  'tracker': 'M288 384h-192c-17.6 0-32 14.4-32 32v576c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-576c0-17.6-14.4-32-32-32zM288 960h-192v-256h192v256zM608 256h-192c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-704c0-17.6-14.4-32-32-32zM608 960h-192v-320h192v320zM928 128h-192c-17.6 0-32 14.4-32 32v832c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-832c0-17.6-14.4-32-32-32zM928 960h-192v-384h192v384z',
  'activity': "M938.667 469.333h-170.667c-17.067 0-34.133 12.8-38.4 29.867l-89.6 260.267-217.6-644.267c-4.267-17.067-21.333-29.867-38.4-29.867s-34.133 12.8-38.4 29.867l-119.467 354.133h-140.8c-25.6 0-42.667 17.067-42.667 42.667s17.067 42.667 42.667 42.667h170.667c17.067 0 34.133-12.8 38.4-29.867l89.6-260.267 217.6 648.533c4.267 17.067 21.333 29.867 38.4 29.867s34.133-12.8 38.4-29.867l119.467-354.133h140.8c25.6 0 42.667-17.067 42.667-42.667s-17.067-46.933-42.667-46.933z",
  'reports': "M1024 320l-512-256-512 256 512 256 512-256zM512 148.97l342.058 171.030-342.058 171.030-342.058-171.030 342.058-171.030zM921.444 460.722l102.556 51.278-512 256-512-256 102.556-51.278 409.444 204.722zM921.444 652.722l102.556 51.278-512 256-512-256 102.556-51.278 409.444 204.722z",
};

class Icon extends React.Component {
  
  render() {
    const { props } = this;
    
    const classes = classNames("icon", props.className, {
      "icon--middle": props.middle
    });
    
    return (
      <svg className={classes} viewBox="0 0 1024 1024">
        <path d={icons[props.type]}></path>
      </svg>
    )
  }
}

export default Icon