using System;
using System.Net.Mail;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DigitalArtStd.Models;

namespace DigitalArtStd.Controllers
{
    public class HomeController : Controller
    {
        
        public IActionResult Index()
        {
			ViewData["Caption"] = "Together, Let's Create Application That Looks Like You ";
			ViewData["buttonCaption"] = "Learn More";
			ViewData["sectionID"] = "analyse";
            ViewData["captionImage"] = "/images/back.png";
			return View();
        }

		public IActionResult Portfolio()
        {
			ViewData["Caption"] = "Transform Your Imagination Into Reality";
			ViewData["buttonCaption"] = "Our Realisations";
			ViewData["sectionID"] = "apps";
			ViewData["captionImage"] = "/images/portfolio.png";
			return View();
        }

        public IActionResult App1() 
        {
            ViewData["Caption"] = "Transform Your Imagination Into Reality";
            ViewData["buttonCaption"] = "Our Realisations";
            ViewData["sectionID"] = "focusedApp1";
            ViewData["captionImage"] = "/images/portfolio.png";
            return View();
        }

        public IActionResult About()
        {
			ViewData["Caption"] = "We Can Do Anything";
			ViewData["buttonCaption"] = "Read More About Us";
			ViewData["sectionID"] = "main";
            ViewData["captionImage"] = "/images/aboutus.png";

            return View();
        }



		public IActionResult Contact(ContactViewModel vm)
		{
			ViewData["Caption"] = "";
            ViewData["buttonCaption"] = "Contact Us";
			ViewData["sectionID"] = "main";
            ViewData["captionImage"] = "/images/image-slide-4.jpg";

			if (ModelState.IsValid)
			{
				try
				{
					MailMessage msz = new MailMessage();
					msz.From = new MailAddress(vm.InfoEmail);//Email which you are getting 
														 //from contact us page 
					msz.To.Add(vm.InfoEmail);//Where mail will be sent 
					msz.ReplyToList.Add(vm.Email);
					msz.Subject = vm.FirstName + " " + vm.LastName + " : " + vm.Subject;
					msz.Body = vm.Message;
					SmtpClient smtp = new SmtpClient
					{
						Host = vm.SMTPRelay,

						Port = vm.SMTPPort,

						Credentials = new System.Net.NetworkCredential
						(vm.AuthUserSMTP, vm.AuthPwdSMTP),

						EnableSsl = true
					};

					smtp.Send(msz);

					ModelState.Clear();
					ViewBag.Message = "Thank you for Contacting us ";
				}
				catch (Exception ex)
				{
					ModelState.Clear();
					ViewBag.Message = $" Sorry we are facing Problem here {ex.Message}";
				}
			}

			return View();
		}

        public IActionResult Privacy()
        {
            ViewData["Caption"] = "";
            ViewData["buttonCaption"] = "Read our Privacy Policy";
			ViewData["sectionID"] = "main";
            ViewData["captionImage"] = "/images/privacy.jpg";
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
