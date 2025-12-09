// When the page loads, show instructions
document.addEventListener("DOMContentLoaded", function () {
  showModal("modal_instructions");
});

// Shows any modal
function showModal(id) {
  document.getElementById(id).style.display = "flex";
}

// Hides any modal
function hideModal(id) {
  document.getElementById(id).style.display = "none";

  if (id === "modal_instructions") {
    alert(
      "The backpack in the right corner holds one word from each game. You’ll need these for the final challenge. Click OK to start the game. Good luck—time is ticking!"
    );

    const bgMusic = document.getElementById("bgMusic");
    bgMusic.volume = 0.01;
    bgMusic.play();

    startTimer(120);
    showBalloonsRandomly();
  }
}

// Timer
function startTimer(seconds) {
  document.getElementById("countdown").innerHTML = seconds;

  if (seconds > 0) {
    setTimeout(function () {
      startTimer(seconds - 1);
    }, 1000);
  } else {
    document.getElementById("countdown").style.color = "red";
    endGame();
  }
}

// Show balloons one by one
function showBalloonsRandomly() {
  let balloons = Array.from(document.querySelectorAll(".balloon"));

  function showOneBalloon() {
    if (balloons.length === 0) return;

    let randomIndex = Math.floor(Math.random() * balloons.length);
    let balloon = balloons.splice(randomIndex, 1)[0];

    balloon.style.display = "block";
    balloon.style.opacity = "1";

    setTimeout(showOneBalloon, 500);
  }

  showOneBalloon();
}

// Pop balloon
function popBalloon(balloon, balloonId) {
  // Each balloon’s special behavior
  if (balloonId === "modal_f") {
    if (balloon.src.includes("blackballoon.png")) {
      balloon.src = "images/h.png";
    } else {
      balloon.style.display = "none";
    }
  } else if (balloonId === "modal_u") {
    if (balloon.src.includes("whiteballoon.png")) {
      balloon.src = "images/u.png";
    } else {
      balloon.style.display = "none";
    }
  } else if (balloonId === "modal_n") {
    if (balloon.src.includes("whiteballoon.png")) {
      balloon.src = "images/n.png";
    } else {
      balloon.style.display = "none";
    }
  } else if (balloonId === "modal_h") {
    if (balloon.src.includes("blackballoon.png")) {
      balloon.src = "images/F.png";
    } else {
      balloon.style.display = "none";
    }
  } else if (balloonId === "modal_o") {
    if (balloon.src.includes("whiteballoon.png")) {
      balloon.src = "images/u.png";
    } else {
      balloon.style.display = "none";
    }
  } else if (balloonId === "modal_u2") {
    if (balloon.src.includes("blackballoon.png")) {
      balloon.src = "images/s.png";
    } else {
      balloon.style.display = "none";
    }
  } else if (balloonId === "modal_s") {
    if (balloon.src.includes("whiteballoon.png")) {
      balloon.src = "images/e.png";
    } else {
      balloon.style.display = "none";
    }
  } else if (balloonId === "modal_e") {
    if (balloon.src.includes("blackballoon.png")) {
      balloon.src = "images/o.png";
    } else {
      balloon.style.display = "none";
    }
  } else {
    balloon.style.display = "none";
  }

  // no more clicking
  balloon.style.pointerEvents = "none";

  // play pop sound
  document.getElementById("popSound").currentTime = 0;
  document.getElementById("popSound").play();
  document.getElementById("popSound").volume = 0.03;
}

// Inventory
function showInventory() {
  document.getElementById("artModal").style.display = "flex";
}

function hideInventory() {
  document.getElementById("artModal").style.display = "none";
}

// Lock
function submitLockWord() {
  const input = document.getElementById("lockInput").value.trim().toUpperCase();
  const message = document.getElementById("lockMessage");

  if (!input || input.includes(" ")) {
    message.textContent = "Please enter ONE word without spaces.";
    return;
  }

  if (input === "FUNHOUSE") {
    alert(
      "Congrats you made it...Head to the next room if you still want a chance to save Eric."
    );
    window.location.href = "https://lcdff3.csb.app/";
  } else {
    alert(
      "Uh oh! You've been caught! The page will be restarted if you wish to save Eric."
    );
    location.reload();
  }
}

function openHint() {
  document.getElementById("hintModal").style.display = "flex";
}

function closeHint() {
  document.getElementById("hintModal").style.display = "none";
}

// End game when time runs out
function endGame() {
  let balloons = document.querySelectorAll(".balloon");

  balloons.forEach(function (balloon) {
    balloon.style.display = "none";
    balloon.style.pointerEvents = "none";
  });

  alert(
    "The clock was ticking. The page will be restarted if you want to save Eric."
  );
  location.reload();
}
