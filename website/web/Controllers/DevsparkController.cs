using Microsoft.AspNetCore.Mvc;

namespace web.Controllers
{
    public class DevsparkController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
