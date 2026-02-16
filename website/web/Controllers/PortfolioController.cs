using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using web.Models;

namespace web.Controllers
{
    public class PortfolioController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}
