<script>
    import * as config from '$lib/config';
</script>

<section class="presentation">
    <img class="presentation__profile_img" src="/alvaro.jpg" alt="Foto de perfil de Alvaro Valverde">
    <div class="presentation__info">
	    <h2>{config.title}</h2>
        <h1>Juior full stack developer</h1>
    </div>
</section>

<section>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ut placeat facilis ab, nihil odio non aspernatur sint omnis, maiores accusamus numquam hic aperiam magni! Reprehenderit doloribus enim perspiciatis deleniti.</p>
</section>

<section>
    <h2>Projects</h2>
</section>

<style>
    .presentation {
        display: flex;
        flex-direction: row;
        gap: 3rem;

        margin-bottom: 10rem;
    }

    .presentation .presentation__profile_img {
        width: 27rem;
        height: 27rem;
        border-radius: 50%;
    }

    
	@media (max-width: 768px) {
        .presentation {
            flex-direction: column;
            align-items: center;
        }
        .presentation .presentation__info {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .presentation .presentation__info h1 {
            font-size: 27px;
        }
		.presentation .presentation__profile_img {
            width: 20rem;
            height: 20rem;
        }
	}
</style>