using Microsoft.AspNetCore.Mvc;

namespace web.Controllers
{
    public class ArtworksController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
