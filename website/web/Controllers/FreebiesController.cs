using Microsoft.AspNetCore.Mvc;

namespace web.Controllers
{
    public class FreebiesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
