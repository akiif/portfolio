// import mui icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const socialIcons = {
  github: (className) => <GitHubIcon className={className} />,
  linkedin: (className) => <LinkedInIcon className={className} />,
  twitter: (className) => <TwitterIcon className={className} />,
  instagram: (className) => <InstagramIcon className={className} />,
};

export default socialIcons;