from fastapi import FastAPI

app = FastAPI()

# Importa y monta routers aquí
# from .routers import example_router
# app.include_router(example_router.router)

@app.get("/")
def read_root():
    return {"message": "SmartDocX API"}
