using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DigitalArtStd.Models
{
    public class ContactViewModel
    {

		private const string _infoEmail = "info@digitalartstd.com";
		private const string _smtpRelay = "email-smtp.us-east-1.amazonaws.com";
		private const int _smtpPort = 587;
		private const string _authUserSMTP = "AKIAIEKO4IBTODA4EVPQ";
		private const string _authPwdSMTP = "An/WQfpWqdzM87mNsRwFXm1WTvlkK0P3ZOhI7to5viSW";


		public string InfoEmail {get => _infoEmail; }
		public string SMTPRelay {get => _smtpRelay; }
		public int SMTPPort {get => _smtpPort; }
		public string AuthUserSMTP {get => _authUserSMTP; }
		public string AuthPwdSMTP {get => _authPwdSMTP; }
        

		[Required]
        [StringLength(20, MinimumLength = 2)]
        public string FirstName { get; set; }

		[Required]
        [StringLength(20, MinimumLength = 2)]
        public string LastName { get; set; }
        
		[Phone]
        public string Phone { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Subject { get; set; }

        [Required]
        public string Message { get; set; }


    }
}
