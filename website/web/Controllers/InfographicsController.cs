using Microsoft.AspNetCore.Mvc;

namespace web.Controllers
{
    public class InfographicsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
